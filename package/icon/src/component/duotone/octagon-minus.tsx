
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-minus?s=duotone octagon-minus}
 * @preview ![octagon-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/octagon-minus.svg)
 */
const OctagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.1 191.5l0 129c0 19.1 7.6 37.4 21.1 50.9L140.6 490.8c13.5 13.5 31.8 21.1 50.9 21.1l129 0c19.1 0 37.4-7.6 50.9-21.1L490.8 371.4c13.5-13.5 21.1-31.8 21.1-50.9l0-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2C357.9 7.7 339.6 .1 320.5 .1l-129 0c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6C7.7 154.1 .1 172.4 .1 191.5zM160 256c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24z" />
        <path d="M160 256c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default OctagonMinus;