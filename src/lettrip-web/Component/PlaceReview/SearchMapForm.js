/*global kakao*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

import styles from "./PlaceReview.module.css";

const SearchMapForm = ({ onPlaceSelect }) => {
  const [keyword, setKeyword] = useState("");
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [infowindow, setInfowindow] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState({
    name: "",
    xpoint: "",
    ypoint: "",
    categoryName: "",
    province: "",
    city: "",
  });
  const [selectedUrl, setSelectedUrl] = useState("");
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);

  useEffect(() => {
    //카카오 맵 API 초기화
    kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978), // 초기 중심 좌표 설정
        level: 5, // 초기 확대 수준 설정
      };
      const mapInstance = new kakao.maps.Map(container, options);
      setMap(mapInstance);
      setInfowindow(new kakao.maps.InfoWindow({ zIndex: 1 }));
    });
  }, []);

  useEffect(() => {
    console.log(selectedPlace);
  }, [selectedPlace]);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim() === "") return;

    if (map) {
      const ps = new kakao.maps.services.Places(map);
      const searchOption = {
        size: 10, // 한 번에 10개까지 보여주기
      };
      ps.keywordSearch(keyword, placesSearchCB, searchOption);
    }
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      displayPlaces(data);
      displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  const displayPlaces = (places) => {
    removeAllMarkers();

    const bounds = new kakao.maps.LatLngBounds();
    const newMarkers = [];

    for (let i = 0; i < places.length; i++) {
      const place = places[i];
      const position = new kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(position, i);
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 클릭하면 selectedPlace로 설정
        console.log(place);
        setSelectedPlace({
          name: place.place_name,
          xpoint: place.x,
          ypoint: place.y,
          categoryName: place.category_name,
        });
        setIsPlaceSelected(true);
        setSelectedUrl(place.place_url);
      });
      newMarkers.push(marker);
      bounds.extend(position);
    }

    setMarkers(newMarkers);
    map.setBounds(bounds);
  };

  const addMarker = (position, idx) => {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    const imageSize = new kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new kakao.maps.Size(36, 691),
      spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10),
      offset: new kakao.maps.Point(13, 37),
    };
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions
    );
    const marker = new kakao.maps.Marker({
      position,
      image: markerImage,
    });

    marker.setMap(map);
    return marker;
  };

  const removeAllMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const displayPagination = (pagination) => {
    setPagination(pagination);
  };

  const handleMarkerMouseOver = (marker, title) => {
    let tempContent = document.createElement("div");
    tempContent.innerHTML = title;

    kakao.maps.event.addListener(marker, "mouseover", function () {
      infowindow.setContent(tempContent);
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  };

  const handleMarkerMouseOut = () => {
    infowindow.close();
  };

  const handleListItemMouseOver = (marker, title) => {
    setSelectedPlace(title);
    infowindow.setContent(title);
    infowindow.open(map, marker);
  };

  const handleListItemMouseOut = () => {
    setSelectedPlace(null);
    infowindow.close();
  };

  const handlePlaceConfirmClick = () => {
    onPlaceSelect(selectedPlace);
  };

  return (
    <div>
      <div className={styles.place_search}>
        <input
          type='text'
          placeholder='검색하고 싶은 장소를 입력하세요.'
          value={keyword}
          onChange={handleKeywordChange}
        />
        <GoSearch className={styles.place_search_btn} onClick={handleSearch} />
      </div>
      <div
        className={styles.kakao_map}
        id='map'
        style={{ width: "115%", height: "288px" }}
      />
      <div>
        {isPlaceSelected ? (
          <div className={styles.place_search_info}>
            <Link
              to={selectedUrl}
              target='_blank'
              className={styles.go_kakao_map}
            >
              kakao map으로 보기
            </Link>
            <div className={styles.place_selected_name}>
              현재 선택 : <span>{selectedPlace.name}</span>
            </div>
            <div>
              <button
                className={styles.searchBtn}
                onClick={handlePlaceConfirmClick}
              >
                검색
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.place_search_text}>
            장소 검색 후 원하는 장소를 클릭해주세요.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMapForm;
