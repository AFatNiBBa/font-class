
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=regular house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5 64 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-186.5 24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8l-264-224zM112 432l0-227.2L288 55.5 464 204.8 464 432c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zm64-162.7c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9c-33.8 0-61.3 27.4-61.3 61.3z" />
    </Icon>
);

export default HouseHeart;