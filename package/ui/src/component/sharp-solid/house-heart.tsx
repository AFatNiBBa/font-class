
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=sharp-solid house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M511.8 287.6l64.2 0 0-47.6L288.4 0 0 240l0 47.6 64.1 0 0 224.4 448.7 0-1-224.4zM176 267.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L288 400.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7z" />
    </Icon>
);

export default HouseHeart;