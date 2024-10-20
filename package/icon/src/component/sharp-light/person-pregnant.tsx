
import { Icon } from "../../index";

/**
 * A component that renders the `person-pregnant` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pregnant?s=sharp-light person-pregnant}
 * @preview ![person-pregnant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-pregnant.svg)
 */
const PersonPregnant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 192 0zM160 384l0 112 0 16-32 0 0-16 0-112-32 0 0-32 0-140.9L62.9 293.9 33.1 282.1l57.6-144 4-10.1 1.2 0 9.6 0 22.4 0 64 0 64 0 18.3 97.7c44.3 8.6 77.7 47.5 77.7 94.3l0 32 0 32-32 0-16 0-48 0 0 112 0 16-32 0 0-16 0-112-32 0-32 0zm32-224l-64 0 0 192 32 0 32 0 32 0 32 0 48 0 16 0 0-32c0-31.1-22.3-57.1-51.7-62.8L246.9 253l-4-21.4L229.4 160 192 160z" />
    </Icon>
);

export default PersonPregnant;