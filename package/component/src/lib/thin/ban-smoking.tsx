
import { Icon } from "../../index";

/**
 * A component that renders the `ban-smoking` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-smoking?s=thin ban-smoking}
 * @preview ![ban-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ban-smoking.svg)
 */
const BanSmoking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80.7 92L420 431.3C377.1 471.4 319.4 496 256 496C123.5 496 16 388.5 16 256c0-63.4 24.6-121.1 64.7-164zM235.3 224L92 80.7C134.9 40.6 192.6 16 256 16c132.5 0 240 107.5 240 240c0 63.4-24.6 121.1-64.7 164l-100-100 52.7 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-148.7 0zm16 16L384 240c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-68.7 0-64-64zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm8-408c-4.4 0-8 3.6-8 8c0 22.1 17.9 40 40 40l48 0c13.3 0 24 10.7 24 24c0 4.4 3.6 8 8 8s8-3.6 8-8c0-22.1-17.9-40-40-40l-48 0c-13.3 0-24-10.7-24-24c0-4.4-3.6-8-8-8zM252.1 304L128 304c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l60.1 0-16-16L128 224c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l140.1 0-16-16z" />
    </Icon>
);

export default BanSmoking;