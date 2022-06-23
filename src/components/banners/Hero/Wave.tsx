export function Wave() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      height="90px"
      width="120%"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0)',
        textAlign: 'center',
        marginBottom: '-1px',
      }}
    >
      <path fill="#EBEBEB" fillOpacity="1" d="M0,288L48,256C96,224,192,160,288,122.7C384,85,480,75,576,101.3C672,128,768,192,864,192C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    </svg>
  );
}
