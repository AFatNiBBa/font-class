
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-canister` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-canister?s=sharp-duotone-solid film-canister}
 * @preview ![film-canister](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/film-canister.svg)
 */
const FilmCanister: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 96l288 0 0 32 0 288 0 32L32 448 32 96z" />
        <path d="M96 0L256 0l0 32 64 0 32 0 0 64-32 0L32 96 0 96 0 32l32 0 64 0L96 0zM0 448l32 0 288 0 32 0 0 64-32 0L32 512 0 512l0-64zM320 128l256 0 0 192-64 0 0 96-192 0 0-288zm72 40l0 48 48 0 0-48-48 0zm144 0l-48 0 0 48 48 0 0-48zM392 328l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default FilmCanister;