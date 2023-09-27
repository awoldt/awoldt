/* eslint-disable @next/next/no-img-element */
export default function Tech() {
  return (
    <>
      <div
        className="row justify-content-center"
        style={{ marginTop: "25px", paddingBottom: "50px" }}
      >
        <div
          className="col-xs-6 col-lg-3 col-sm-4"
          style={{ marginBottom: "25px" }}
        >
          <img
            src="/icons/aws-icon.svg"
            style={{ width: "85px", height: "85px" }}
            alt="aws icon"
          />
          <span
            style={{ display: "block", fontWeight: "bold" }}
            className="text-secondary"
          >
            AWS
          </span>
        </div>
        <div
          className="col-xs-6 col-lg-3 col-sm-4"
          style={{ marginBottom: "25px" }}
        >
          <img
            src="/icons/c-sharp-icon.svg"
            alt="C# icon"
            style={{ width: "85px", height: "85px" }}
          />
          <span
            style={{ display: "block", fontWeight: "bold" }}
            className="text-secondary"
          >
            C#
          </span>
        </div>
        <div
          className="col-xs-6 col-lg-3 col-sm-4"
          style={{ marginBottom: "25px" }}
        >
          <img
            src="/icons/google-cloud-icon.svg"
            alt="Google Cloud icon"
            style={{ width: "85px", height: "85px" }}
          />
          <span
            style={{ display: "block", fontWeight: "bold" }}
            className="text-secondary"
          >
            Google Cloud
          </span>
        </div>
        <div
          className="col-xs-6 col-lg-3 col-sm-4"
          style={{ marginBottom: "25px" }}
        >
          <img
            src="/icons/js-icon.svg"
            alt="JavaScript icon"
            style={{ width: "85px", height: "85px" }}
          />
          <span
            style={{ display: "block", fontWeight: "bold" }}
            className="text-secondary"
          >
            JavaScript
          </span>
        </div>
        <div
          className="col-xs-6 col-lg-3 col-sm-4"
          style={{ marginBottom: "25px" }}
        >
          <img
            src="/icons/nextjs-icon.svg"
            alt="Next js icon"
            style={{ width: "85px", height: "85px", marginBottom: "5px" }}
          />
          <span
            style={{ display: "block", fontWeight: "bold" }}
            className="text-secondary"
          >
            Next JS
          </span>
        </div>
        <div
          className="col-xs-6 col-lg-3 col-sm-4"
          style={{ marginBottom: "25px" }}
        >
          <img
            src="/icons/reactjs-icon.svg"
            alt="React js icon"
            style={{ width: "85px", height: "85px" }}
          />
          <span
            style={{ display: "block", fontWeight: "bold" }}
            className="text-secondary"
          >
            React
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "25px",
          width: "fit-content",
          margin: "auto",
          marginBottom: "75px",
        }}
      >
        <a
          href="https://www.credly.com/badges/3a42aaad-f3b4-4cb6-8ad5-4750a2a7e921/public_url"
          target={"_blank"}
          rel="noreferrer"
          title="AWS Cloud Practitioner badge"
          style={{
            textDecoration: "none",
          }}
        >
          <img
            src="/icons/aws-certification.png"
            style={{ width: "50px", height: "50px" }}
            className="img-fluid"
            alt="aws certification badge"
          />
          <p
            style={{
              display: "inline",
              marginLeft: "10px",
              fontSize: "14px",
            }}
            className="text-secondary"
          >
            Certified AWS Cloud Practitioner
          </p>
        </a>
      </div>
    </>
  );
}
