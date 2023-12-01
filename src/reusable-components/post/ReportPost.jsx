import { useState } from "react";
import "./ReportPost.css";

function ReportPost({ onCloseReport }) {
  const [inputData, setInputData] = useState({});
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleReportChange(e) {
    setIsSuccess(false);
    const { name, checked, value, type } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(inputData);
  }

  return (
    <>
      <div className="report-post-modal">
        <h2 className="report-post-header">Report</h2>
        {!isSuccess ? (
          <div className="report-post-inputs">
            <div>
              <p style={{ fontSize: "0.9rem", textAlign: "start" }}>
                Select problem that you have encountered:
              </p>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="violence"
                  onChange={handleReportChange}
                  name="report"
                />
                <label htmlFor="violence">Violence</label>
              </div>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="harrassments"
                  onChange={handleReportChange}
                  name="report"
                />
                <label htmlFor="harrassments">Harrassments</label>
              </div>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="suicide"
                  onChange={handleReportChange}
                  name="report"
                />
                <label htmlFor="suicide">Suicide</label>
              </div>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="false-information"
                  onChange={handleReportChange}
                  name="report"
                />
                <label htmlFor="false-information">False Information</label>
              </div>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="spam"
                  onChange={handleReportChange}
                  name="report"
                />
                <label htmlFor="spam">Spam</label>
              </div>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="hate"
                  onChange={handleReportChange}
                  name="report"
                />
                <label htmlFor="hate">Hate Speech</label>
              </div>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="abuse"
                  onChange={handleReportChange}
                  name="report"
                />
                <label htmlFor="abuse">Abuse</label>
              </div>
              <div className="report-inputs">
                <input
                  type="radio"
                  id="something-else"
                  onClick={() => {
                    setIsOthersOpen(!isOthersOpen);
                  }}
                  name="report"
                  //   onChange={handleReportSubmit}
                />
                <label htmlFor="something-else">
                  Something else, please specify
                </label>
                {isOthersOpen && (
                  <input
                    type="text"
                    placeholder="Enter"
                    className="others-input"
                    name="others"
                    onChange={handleReportChange}
                  />
                )}
              </div>
            </div>
            <button
              style={{
                height: "2rem",
                width: "12rem",
                backgroundColor: "#FF6565",
                color: "white",
                border: 0,
                borderRadius: "1rem",
                alignSelf: "center",
              }}
              // onClick={() => {
              //   setIsSuccess(true);
              // }}
            >
              Submit
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="success-image"></div>
              <h2 style={{ marginBottom: "0.5rem" }}>
                {" "}
                Successfully Submitted!
              </h2>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                We will notify the DOS Team about your concern.
              </p>
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  marginBottom: "0.5rem",
                }}
              >
                THANK YOU FOR KEEPING THE DOS A SAFE PLACE!
              </p>
              <div className="roblox-face"></div>
              <button
                className="save-user-changes"
                style={{ border: "0" }}
                onClick={onCloseReport}
              >
                Close
              </button>
            </div>
          </>
        )}

        <div
          className="delete"
          style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
          onClick={onCloseReport}
        ></div>
      </div>
    </>
  );
}

export default ReportPost;
