import React from "react";
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();

    const day_text_dict = {
        0: "일",
        1: "월",
        2: "화",
        3: "수",
        4: "목",
        5: "금",
        6: "토",
    };

    // console.log(
    //     'DAY:',
    //     Object.keys(day_text_dict).map((_d, idx)=>day_text_dict[_d])
    // );

    const week_days = Object.keys(day_text_dict).map((_d, idx) => {
        let today = new Date().getDay();

        let d =
            today + parseInt(_d) > 6
                ? today + parseInt(_d) - 7
                : today + parseInt(_d);

        return day_text_dict[d];

    });

    console.log("오늘이 제일 위로 오는지 확인해봐야지 :", week_days);


    const week_rates = week_days.map((w, idx) => {
        return {
            day: w,
            rate:
                Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
                Math.ceil(1),
        };
    });

    return (
        <>
            <div
                style={{
                    maxWidth: "350px",
                    width: "80vw",
                    height: "90vh",
                    margin: "5vh auto",
                    padding: "5vh 0",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                    borderRadius: "5px",
                }}
            >
                <h3 style={{ textAlign: "center" }}>내 일주일은?</h3>


                {week_rates.map((w, idx) => {
                    return (
                        <div
                            key={`week_day_${idx}`}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "1rem 0",
                                width: "100%",
                            }}
                        >
                            { }
                            <p style={{
                                margin: "0 0.5rem 0",
                                fontWeight: "bold",
                            }}>
                                {w.day}
                            </p>
                            {Array.from({ length: 5 }, (item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "30px",
                                            margin: "5px",
                                            backgroundColor: w.rate < idx ? "#ddd" : "papayawhip",
                                        }}
                                    ></div>
                                );
                            })}
                            <div
                                style={{
                                    appearance: "none",
                                    backgroundColor: "transparent",
                                    borderColor: "purple",
                                    width: "10px",
                                    height: "10px",
                                    borderTop: "1rem solid transparent",
                                    borderBottom: "1rem solid transparent",
                                    boderLeft: "1.6rem solid purple",
                                    cursor: "pointer",
                                    color: "black",
                                }}
                                onClick={() => {
                                    history.push(`/review/${w.day}`);
                                }}

                            ></div>
                        </div>
                    );
                })}
            </div>
        </>
    );

};

export default Main;