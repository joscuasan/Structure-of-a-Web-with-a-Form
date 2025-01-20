import classes from './main-header-background.module.css';

export default function MainHeaderBackground() {
  return (
    <div className={classes['header-background']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#4facfe', stopOpacity: '1' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#00f2fe', stopOpacity: '1' }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,101.3C672,96,768,128,864,154.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
