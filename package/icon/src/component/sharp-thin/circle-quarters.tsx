
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarters` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarters?s=sharp-thin circle-quarters}
 * @preview ![circle-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-quarters.svg)
 */
const CircleQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M420 431.3l-164-164L92 431.3C134.9 471.4 192.6 496 256 496s121.1-24.6 164-64.7zM431.3 420C471.4 377.1 496 319.4 496 256s-24.6-121.1-64.7-164l-164 164 164 164zM420 80.7C377.1 40.6 319.4 16 256 16S134.9 40.6 92 80.7l164 164 164-164zM80.7 92C40.6 134.9 16 192.6 16 256s24.6 121.1 64.7 164l164-164L80.7 92zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarters;