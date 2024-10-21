
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-plus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-plus?s=light octagon-plus}
 * @preview ![octagon-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/octagon-plus.svg)
 */
const OctagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M191.5 32.1c-10.6 0-20.8 4.2-28.3 11.7L43.8 163.2c-7.5 7.5-11.7 17.7-11.7 28.3l0 129c0 10.6 4.2 20.8 11.7 28.3L21.2 371.4C7.7 357.9 .1 339.6 .1 320.5l0-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2C154.1 7.7 172.4 .1 191.5 .1l129 0c19.1 0 37.4 7.6 50.9 21.1L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9l0 129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8c-13.5 13.5-31.8 21.1-50.9 21.1l-129 0c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4l22.6-22.6L163.2 468.2c7.5 7.5 17.7 11.7 28.3 11.7l129 0c10.6 0 20.8-4.2 28.3-11.7L468.2 348.8c7.5-7.5 11.7-17.7 11.7-28.3l0-129c0-10.6-4.2-20.8-11.7-28.3L348.8 43.8c-7.5-7.5-17.7-11.7-28.3-11.7l-129 0zM240 352l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
    </Icon>
);

export default OctagonPlus;