
import { Icon } from "../../index";

/**
 * A component that renders the `raygun` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=sharp-regular raygun}
 * @preview ![raygun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/raygun.svg)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 64l-96 0L64 0l0 74.8C26.2 92.8 0 131.3 0 176c0 61.9 50.1 112 112 112L53.5 405.1 32 448l42.9 21.5 42.1 21.1L160 512l21.5-42.9L272 288l16 0 0 8 0 24 48 0 0-24 0-8 0-48 0-128 0-48 0-8 0-24-48 0 0 24 0 8zM218.3 288L138.5 447.6 96.4 426.5 165.7 288l52.7 0zM136 240l-24 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l176 0 0 128-32 0-13.7 0-2.3 0-104 0zM416 64l-48 0 0 24 0 176 0 24 48 0 0-24 0-56 64 0 96 48 0-160-96 48-64 0 0-56 0-24zM112 200a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Raygun;