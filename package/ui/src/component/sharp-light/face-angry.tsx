
import { Icon } from "../../index";

/**
 * A component that renders the `face-angry` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-angry?s=sharp-light face-angry}
 * @preview ![face-angry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-angry.svg)
 */
const FaceAngry: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm70.8-105.4l23.8-21.4-10.7-11.9C323.8 355.4 295.7 336 256 336s-67.8 19.4-83.9 37.3l-10.7 11.9 23.8 21.4 10.7-11.9c11.7-13 31.6-26.7 60.1-26.7s48.4 13.7 60.1 26.7l10.7 11.9zM176.4 264c13.3 0 24-10.7 24-24c0-2.6-.4-5.1-1.2-7.4l19.7 6.6 15.2 5.1 10.1-30.4-15.2-5.1-96-32-15.2-5.1-10.1 30.4 15.2 5.1 39.6 13.2c-6.2 4.3-10.2 11.5-10.2 19.6c0 13.3 10.7 24 24 24zm184-24c0-8.2-4.1-15.5-10.4-19.8l39.1-13 15.2-5.1-10.1-30.4-15.2 5.1-96 32-15.2 5.1 10.1 30.4 15.2-5.1 20.6-6.9c-.8 2.4-1.3 5-1.3 7.7c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default FaceAngry;