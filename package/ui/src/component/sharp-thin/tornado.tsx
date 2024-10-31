
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=sharp-thin tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 45.6C16 74.1 21.1 102 30.6 128l305.6 0c-.1-1.8-.2-3.6-.2-5.4c0-21.3 8.5-41.7 23.5-56.7L400 25.4l0-9.4L16 16l0 29.6zM37.1 144c20.1 44.6 53.6 82.8 97.2 108.4L194.8 288l233.5 0c-3.9-15.5-10.9-30.2-20.6-43.1L352 170.7c-6-8.1-10.5-17.1-13.1-26.7L37.1 144zM431.2 304L222 304l28.8 16.9c21.8 12.8 39.5 31.7 50.8 54.4c12.4 24.8 16.6 52.9 12.1 80.2l-3 17.8 75.7-60.6c28.8-23.1 45.6-58 45.6-95c0-4.7-.3-9.3-.8-13.9zM0 45.6L0 16 0 0 16 0 400 0l16 0 0 16 0 16L370.8 77.2c-12 12-18.8 28.4-18.8 45.4c0 13.9 4.5 27.4 12.8 38.5l55.6 74.2c17.9 23.8 27.5 52.8 27.5 82.6c0 41.8-19 81.3-51.6 107.4L306.7 497 288 512l3.9-23.6 5.9-35.4c4-24 .3-48.7-10.6-70.5c-10-19.9-25.5-36.5-44.6-47.8L126.2 266.2C48 220.2 0 136.3 0 45.6z" />
    </Icon>
);

export default Tornado;