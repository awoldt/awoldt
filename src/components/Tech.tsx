/* eslint-disable @next/next/no-img-element */
const Tech = () => {
  return (
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
          alt="AWS icon"
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
          src="/icons/bootstrap-icon.svg"
          style={{ width: "85px", height: "85px" }}
          alt="bootstrap icon"
        />
        <span
          style={{ display: "block", fontWeight: "bold" }}
          className="text-secondary"
        >
          Bootstrap
        </span>
      </div>
      <div
        className="col-xs-6 col-lg-3 col-sm-4"
        style={{ marginBottom: "25px" }}
      >
        <img
          src="/icons/expressjs-icon.svg"
          alt="express js icon"
          style={{ width: "85px", height: "85px" }}
        />
        <span
          style={{ display: "block", fontWeight: "bold" }}
          className="text-secondary"
        >
          Express
        </span>
      </div>
      <div
        className="col-xs-6 col-lg-3 col-sm-4"
        style={{ marginBottom: "25px" }}
      >
        <img
          src="/icons/google-cloud-icon.svg"
          alt="Google cloud icon"
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
          src="/icons/mongodb-icon.svg"
          alt="mongodb icon"
          style={{ width: "85px", height: "85px" }}
        />
        <span
          style={{ display: "block", fontWeight: "bold" }}
          className="text-secondary mt-2"
        >
          MongoDB
        </span>
      </div>
      <div
        className="col-xs-6 col-lg-3 col-sm-4"
        style={{ marginBottom: "25px" }}
      >
        <img
          src="/icons/nextjs-icon.svg"
          alt="nextjs icon"
          style={{ width: "85px", height: "85px" }}
        />
        <span
          style={{ display: "block", fontWeight: "bold" }}
          className="text-secondary mt-2"
        >
          Next.js
        </span>
      </div>
      <div
        className="col-xs-6 col-lg-3 col-sm-4"
        style={{ marginBottom: "25px" }}
      >
        <img
          src="/icons/reactjs-icon.svg"
          alt="reactjs icon"
          style={{ width: "85px", height: "85px" }}
        />
        <span
          style={{ display: "block", fontWeight: "bold" }}
          className="text-secondary mt-2"
        >
          React.js
        </span>
      </div>
      <div
        className="col-xs-6 col-lg-3 col-sm-4"
        style={{ marginBottom: "25px" }}
      >
        <img
          src="/icons/ts-icon.svg"
          style={{ width: "85px", height: "85px" }}
          alt="TypeScript icon"
        />
        <span
          style={{ display: "block", fontWeight: "bold" }}
          className="text-secondary mt-2"
        >
          TypeScript
        </span>
      </div>
      <div style={{ marginTop: "25px", width: "fit-content" }}>
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
    </div>
  );
};

export default Tech;
