
import { Icon } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=regular curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M264 80c-22.1 0-40 17.9-40 40l0 24 192 0c35.3 0 64 28.7 64 64l0 1.1c54.3 7.8 96 54.4 96 110.9l0 48c0 61.9-50.1 112-112 112l-352 0C50.1 480 0 429.9 0 368l0-48c0-56.4 41.7-103.1 96-110.9l0-1.1c0-35.3 28.7-64 64-64l16 0 0-24c0-48.6 39.4-88 88-88l128 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L264 80zM112 432l352 0c35.3 0 64-28.7 64-64L48 368c0 35.3 28.7 64 64 64zM48 320l480 0c0-35.3-28.7-64-64-64l-352 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default CurlingStone;