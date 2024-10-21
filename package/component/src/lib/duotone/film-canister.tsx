
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-canister` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-canister?s=duotone film-canister}
 * @preview ![film-canister](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/film-canister.svg)
 */
const FilmCanister: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 96l288 0 0 32 0 288 0 32L32 448 32 96z" />
        <path d="M96 32c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l64 0zM0 480c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32zM320 128l224 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32 14.3-32 32l0 32c0 17.7-14.3 32-32 32l-160 0 0-288zm72 56l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16zm112-16c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zM392 344l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default FilmCanister;