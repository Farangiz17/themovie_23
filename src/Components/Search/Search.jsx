import React, { useState, useEffect } from "react";
import "./Search.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const qidiruv = useParams();
  const [searchMas, setSearchMas] = useState([]);
  useEffect(() => {
    async function getSearch() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_IMG_URL_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${qidiruv.nom}`
        )
        .then((ress) => {
          console.log(ress.data.results);
          setSearchMas(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getSearch();
  }, [qidiruv]);

  return (
    <div>
      <div className="row g-0">
        <div className="col-3 search_left">
          <ul className="search_left_ul">
            <li>Search Results</li>
            <li className="active">
              <a href="#">Movies</a> <span className="raqam">63</span>
            </li>
            <li>
              <a href="#">People</a> <span className="raqam">3</span>
            </li>
            <li>
              <a href="#">TV Shows</a> <span className="raqam">9</span>
            </li>
            <li>
              <a href="#">Keywords</a> <span className="raqam">0</span>
            </li>
            <li>
              <a href="#">Collections</a> <span className="raqam">1</span>
            </li>
            <li>
              <a href="#">Companies</a> <span className="raqam">7</span>
            </li>
            <li>
              <a href="#">Networks</a> <span className="raqam">11</span>
            </li>
          </ul>
          <p className="last_p">
            Tip: You can use the 'y:' filter to narrow your results by year.
            Example: 'star wars y:1977'.
          </p>
        </div>
        <div className="col-9">
          {(searchMas) ? (
            searchMas.map((item, index) => {
              return (
                <div className="cardd">
                  <img
                    className="card_img"
                    src={
                      item.poster_path
                        ? `${
                            process.env.REACT_APP_BASE_IMG_URL +
                            item.poster_path
                          }`
                        : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREXFhURFRUYHSggJBolGxUVIT0tJSk3Li4uFx8/OD84Nyg5LjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMMBAwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgcDAv/EADgQAAICAQEBDQcDBAMAAAAAAAABAgMRBBIFBhMVITFBUVNykrHRMjNhcXOBskJSkRQiYqEjQ8H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A5gEAFBABQQACkAApAAKQAUEAFBABQQACkAFIABQQAUEAFBABSAAUEKABCgAAAAAAAAAAAAAAAAAAABCgAAAAAAAAAQoAAAAAAAAAAAAABAUAQFAEAKBACgQAAAVLLSXO3hfM2HEes7CXih6ga4Gx4j1nYS8UPUcR6zsJeKHqBrgbHiPWdhLxQ9RxHq+wl4oeoGuBseI9X2EvFD1HEes7CXih6ga4Gx4j1nYS8UPUcR6zsJeKHqBrgbHiPWdhLxQ9TG1ejtoajbBwcllJtPK+wGOCgCAoAgKAICgCAoAgKAAIUACACgACFIUAQAD6U+3Dvx8z0hnm9Htw78fM9HYAAxt0NZDT1uyak4ppYik3l/NgZINLXvm08pRioXZk1FZjDGW8fuN0AANZuhu3Tp7ODnGxy2VLMVFrD+bXUBswa/czderVSlGuNicY7T21FLGcdDZsABym/H31X0n+TOrOU34++p+k/wAmBoACAUEAFBCgAQoAEAFBCgQFAEAKBACgQAoEAAH7o9uHfj5npDPN6fbh34+Z6SwIazfFp526Zwri5y24PC58JmzAHD6fcjVKytuiaSnBt8nIk18TuAABy++Pc6+3UbddUpx4OCysYysnUADnd6+hupstdtcoJwSTeOV7R0QAA5Tfj76r6T/JnVnKb8fe0/Sf5MDnwUAQFAEBQBAUAQFIAKQoAAAAQAUEKBCkAAAAfun24d+Pmeks82o9uHfj5npDAAH4ttjCLlOUYRXPKTSQH7BpNTvl08OSCna+tLZj/L5f9GDPfVP9NMF3puXoB1IOUW+q3pqqfyckZNG+qD95TKPxhJT/ANPAHRAxdFujRf7qxSf7X/bNfZmUAOU34++q+k/yZ1Zym/H31X0n+TA0AAAAgAoIUACACggAoIAKAQAUhQIUhQIUhQIAAP3T7cO/HzPSGecU+3DvR8z0DdCbjTdKLxKNdjT6movDAwN2N24afMIYsu/b+mHe9DlbLdRq7OXbtn0RS5Ir4LmSMncfcizVScpNxqT/ALrHyyk+lLPSdjpNJXRHYqgorp65Prb6QOb0m9eyWHdYof4w/vl/PN5myr3taVc/CT+Mp48sG4AGplvd0j5oTXysl/6Yeo3qw/6rZRfVYlJfysHRADgtbuZqNM9qcWknyWQeYp/PnX3NnuTvjlHENTmUeZW/rj3utf7OqazyPmfI10HO7s73k07NMsS55VL2Zd3qfwA6CE1JKUWpRkspp5TXWctvx97V9J/kzJ3nTls3wbezBwai/wBLe1nyMbfj76r6T/Jgc+CgCAoAgKAICgAQoAgKAAIAKCACggAFIAKQAD6U+3Dvx8z0S+pWQnB5xOMovHPhrB51T7cO/HzPSGB+aqowjGEEoxisRS5kj9AAAAAAAAAAfKrTQhOyyKxK3Z28czazy/PlOZ34++q+k/yZ1Zym/H3tX0n+TA0AIAKCACggAoIAKCACghQBCgCFAAhSFAgBQIUhQCeGmudPK+ZsOPNZ28vDD0MCtZlFPpaT/k3F259X9RFQT4FyvrlHabcLa4y5M/HEZfdgY3Hms7eXhh6DjzWdvLww9D8KFVVVUp18LZdF2YlOUIQhtOK9nly8M+6pojZSuCc4alVShtWSUqlKTjKPJz4aYHz481fby8MPQceazt5eGHofDXutTlCurg9ic4t7cp7STwuf5GZpNGpUQsWn4aUp2Rk3c69lLGOn4sD5ceazt5eGHoOPNZ28vDD0JKFVdcbJ1bcrZ2bFbskoVwi8crXK3nPT0H0jo6pOM4qSrs0+osUHJtwsrTys9KykwPxx5rO3l4Yeg481nby8MPQx6aoujUWNf3VunZeebabz5Gzu3Np/qaowT4J3cBbHabcZ865efDXkwMTjzWdvLww9DG1estvalbNzcVhNpLC+x9640w09dk6uElOy2LfCShhRUcYx82fLXURhwcq9rg7YbcVLG1HlacW11NAYwAAAAAQFAhQAIUACFAAhSFAAAACFAAhQAIAP1B4afU0/4ZstPuooXXzcHKF0pzUcrMJvOzL+JNfc1YAzYaiqddcLlZmpOMJ1bOXBvOy0+pt8vxJZrE7aZqLjXTwcYQzmWxGWeV9beX9zDAH0vntznPmUpyljqy2z6WXqVNVWOWudsm+h7Wz6GOAMyrUVSqjVcp4rlJ1zr2dpKXPFp9GVk+i3QjGdezB8DXXOpQcltyhNPbk3+55z9ka8oGXdfUqp1Uqz/klGU5W7OcRziKS+LMnT7rKGpsucG67JKThlbSa5Yv5p+bNWAMyq+l0wqtVuYTnJOtwSe0o8nKv8T5azU8I44jsQhBQrhnOzFNvlfS222Y5QAAAAAAAAAAAAAAAABCgCFIABSFAhSAAAAAAAAAAAABSFAAAAAAAAAAAAAAAAAAACFAAgBQIAUCAAAUhQIAAAAAAAAAAABQBCgCAoAgBQBCgAQoAgKAIUACAoAAAAAAIUACFAAhQAAAAAAAAAAAAEAAoAAAAAAAIUAAQoAAAAAAP/2Q=="
                    }
                    alt="photo"
                  />

                  <div className="card_text">
                    <div className="text_nomi">
                      <h5>{item.title}</h5>
                      <p>{item.release_date}</p>
                    </div>

                    <p className="overview">{item.overview}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
