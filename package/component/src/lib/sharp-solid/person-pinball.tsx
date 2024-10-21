
import { Icon } from "../../index";

/**
 * A component that renders the `person-pinball` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pinball?s=sharp-solid person-pinball}
 * @preview ![person-pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-pinball.svg)
 */
const PersonPinball: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM0 128l32 0 48 0 17.1 0 9.5 14.3L161.1 224l62.9 0 32 0 0 18.2 292.1-48.7L513.6 90.1 512 85.2l0-5.2 0-48 0-32 32 0 64 0 32 0 0 32 0 146.2 0 37.8 0 8 0 32 0 224 0 32-64 0 0-32 0-96-320 0 0 96 0 32-64 0 0-32 0-192-48 0-17.1 0-9.5-14.3L96 241.7l0 65.1 54.6 54.6 9.4 9.4 0 13.3 0 96 0 32-64 0 0-32 0-82.7L41.4 342.6 18.7 320C6.7 308 0 291.7 0 274.7L0 160l0-32zM0 480L0 346.5l64 64L64 480s0 0 0 0l0 32L0 512l0-32zM280 336a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default PersonPinball;