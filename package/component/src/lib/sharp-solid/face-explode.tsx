
import { Icon } from "../../index";

/**
 * A component that renders the `face-explode` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-explode?s=sharp-solid face-explode}
 * @preview ![face-explode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-explode.svg)
 */
const FaceExplode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M204.8 242.9L213 248l34.5 21.6 8.5 5.3 8.5-5.3L299 248s0 0 0 0l8.2-5.1 8.2 5.1s0 0 0 0l34.5 21.6 8.5 5.3 8.5-5.3 42.7-26.7 42.7 26.7 6.8 4.2 7.5-2.9L512 253.5c0 .8 0 1.7 0 2.5c0 141.4-114.6 256-256 256S0 397.4 0 256c0-.8 0-1.7 0-2.5l45.4 17.5 7.5 2.9 6.8-4.2 42.7-26.7 42.7 26.7 8.5 5.3 8.5-5.3L196.6 248l8.2-5.1zM192 160l-32 0-40 0c-30.9 0-56-25.1-56-56s25.1-56 56-56c8.9 0 17.3 2.1 24.8 5.8C149.7 23.3 176.1 0 208 0c19.1 0 36.3 8.4 48 21.7C267.7 8.4 284.9 0 304 0c31.9 0 58.3 23.3 63.2 53.8c7.5-3.7 15.9-5.8 24.8-5.8c30.9 0 56 25.1 56 56s-25.1 56-56 56l-40 0-32 0 0 53.1-4.3-2.7-8.5-5.3-8.5 5.3L256 237.1l-42.7-26.7-8.5-5.3-8.5 5.3-4.3 2.7 0-53.1zm16.4 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM192 448l128 0c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
    </Icon>
);

export default FaceExplode;