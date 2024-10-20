
import { Icon } from "../../index";

/**
 * A component that renders the `face-surprise` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-surprise?s=thin face-surprise}
 * @preview ![face-surprise](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-surprise.svg)
 */
const FaceSurprise: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm144 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM200 352a56 56 0 1 0 112 0 56 56 0 1 0 -112 0zm56 72a72 72 0 1 1 0-144 72 72 0 1 1 0 144z" />
    </Icon>
);

export default FaceSurprise;