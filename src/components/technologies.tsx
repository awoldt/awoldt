import { Row, Col } from "react-bootstrap";

const Tech = () => {
  return (
    <Row className="justify-content-center" style={{ marginTop: "50px", marginBottom: '50px'}}>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="#68A063"
          stroke-width="0"
          version="1.1"
          viewBox="0 0 32 32"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.998 28.895c-0.337 0-0.673-0.088-0.969-0.259l-3.086-1.826c-0.46-0.257-0.235-0.349-0.083-0.402 0.614-0.213 0.739-0.262 1.394-0.635 0.069-0.038 0.159-0.024 0.231 0.018l2.37 1.407c0.087 0.048 0.207 0.048 0.287 0l9.241-5.333c0.086-0.049 0.141-0.149 0.141-0.25v-10.665c0-0.104-0.055-0.202-0.143-0.255l-9.237-5.329c-0.086-0.050-0.199-0.050-0.285 0l-9.235 5.331c-0.090 0.051-0.146 0.152-0.146 0.253v10.666c0 0.102 0.056 0.198 0.145 0.247l2.532 1.462c1.374 0.687 2.215-0.122 2.215-0.935v-10.53c0-0.149 0.12-0.266 0.269-0.266h1.172c0.146 0 0.267 0.117 0.267 0.266v10.53c0 1.833-0.998 2.885-2.736 2.885-0.534 0-0.955 0-2.129-0.579l-2.423-1.395c-0.598-0.346-0.969-0.993-0.969-1.686v-10.665c0-0.693 0.371-1.339 0.969-1.684l9.242-5.34c0.585-0.331 1.362-0.331 1.942 0l9.241 5.34c0.599 0.346 0.971 0.992 0.971 1.684v10.665c0 0.693-0.372 1.337-0.971 1.686l-9.241 5.335c-0.296 0.171-0.631 0.259-0.973 0.259zM18.853 21.547c-4.045 0-4.892-1.857-4.892-3.414 0-0.148 0.118-0.266 0.266-0.266h1.195c0.133 0 0.245 0.096 0.265 0.226 0.18 1.216 0.717 1.831 3.164 1.831 1.946 0 2.775-0.441 2.775-1.473 0-0.596-0.234-1.037-3.26-1.334-2.528-0.25-4.093-0.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233 0.007 0.075-0.020 0.148-0.071 0.205-0.051 0.054-0.121 0.086-0.196 0.086h-1.2c-0.124 0-0.233-0.088-0.259-0.209-0.288-1.28-0.988-1.689-2.886-1.689-2.126 0-2.373 0.74-2.373 1.295 0 0.673 0.292 0.869 3.161 1.248 2.84 0.375 4.19 0.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Node.js</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="#61DBFB"
          stroke-width="0"
          version="1.1"
          viewBox="0 0 34 32"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path>
          <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>React.js</span>
      </Col>

      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="#553C7B"
          stroke-width="0"
          viewBox="0 0 576 512"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Bootstrap</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="white"
          stroke-width="0"
          role="img"
          viewBox="0 0 24 24"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Next.js</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
          <path
            d="M40.728 20.488l2.05.035 5.57-5.57.27-2.36C44.2 8.657 38.367 6.26 31.993 6.26c-11.54 0-21.28 7.852-24.163 18.488.608-.424 1.908-.106 1.908-.106l11.13-1.83s.572-.947.862-.9A13.88 13.88 0 0 1 32 17.375c3.3.007 6.34 1.173 8.728 3.102z"
            fill="#ea4335"
          ></path>
          <path
            d="M56.17 24.77c-1.293-4.77-3.958-8.982-7.555-12.177l-7.887 7.887c3.16 2.55 5.187 6.452 5.187 10.82v1.392c3.837 0 6.954 3.124 6.954 6.954 0 3.837-3.124 6.954-6.954 6.954H32.007L30.615 48v8.346l1.392 1.385h13.908A18.11 18.11 0 0 0 64 39.647c-.007-6.155-3.1-11.6-7.83-14.876z"
            fill="#4285f4"
          ></path>
          <path
            d="M18.085 57.74h13.9V46.6h-13.9a6.89 6.89 0 0 1-2.862-.622l-2.007.615-5.57 5.57-.488 1.88a18 18 0 0 0 10.926 3.689z"
            fill="#34a853"
          ></path>
          <path
            d="M18.085 21.57A18.11 18.11 0 0 0 0 39.654c0 5.873 2.813 11.095 7.166 14.403l8.064-8.064a6.96 6.96 0 0 1-4.099-6.339c0-3.837 3.124-6.954 6.954-6.954 2.82 0 5.244 1.7 6.34 4.1l8.064-8.064c-3.307-4.353-8.53-7.166-14.403-7.166z"
            fill="#fbbc05"
          ></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Google Cloud</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="white"
          stroke-width="0"
          role="img"
          viewBox="0 0 24 24"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Express.js</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="#589636"
          stroke-width="0"
          role="img"
          viewBox="0 0 24 24"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>MongoDB</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="#0db7ed"
          stroke-width="0"
          viewBox="0 0 640 512"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Docker</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="#f34f29"
          stroke-width="0"
          viewBox="0 0 448 512"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Git</span>
      </Col>

      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          stroke="currentColor"
          fill="#007acc"
          stroke-width="0"
          role="img"
          viewBox="0 0 24 24"
          height="64"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>TypeScript</span>
      </Col>
      <Col xs={6} sm={4} lg={3} style={{ marginBottom: "25px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="64"
          viewBox="0 0 32 32"
          width="64"
        >
          <path
            d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
            fill="#ffa000"
          ></path>
          <path
            d="M13.445 8.543l2.972 5.995-11.97 11.135z"
            fill="#f57f17"
          ></path>
          <path
            d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
            fill="#ffca28"
          ></path>
          <path
            d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
            fill="#ffa000"
          ></path>
        </svg>
        <span style={{display: 'block'}} className='text-secondary'>Firebase</span>
      </Col>
    </Row>
  );
};

export default Tech;
