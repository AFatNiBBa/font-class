
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-divide` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-divide?s=solid octagon-divide}
 * @preview ![octagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/octagon-divide.svg)
 */
const OctagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M140.6 21.2C154.1 7.7 172.4 .1 191.5 .1l129 0c19.1 0 37.4 7.6 50.9 21.1L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9l0 129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8c-13.5 13.5-31.8 21.1-50.9 21.1l-129 0c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4C7.7 357.9 .1 339.6 .1 320.5l0-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2zM256 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-88 40c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM288 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default OctagonDivide;