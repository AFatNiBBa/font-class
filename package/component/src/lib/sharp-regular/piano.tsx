
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=sharp-regular piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 384l0 32 0 16-32 0 0-16 0-32-32 0 0 32 0 16-32 0 0-16 0-32-96 0 0 32 0 16-32 0 0-16 0-32-32 0 0 32 0 16-32 0 0-16 0-32-32 0 0 32 0 16-32 0 0-16 0-32-32 0 0 80 416 0 0-80-32 0zM48 336l416 0 0-18.3L362.5 266.9 336 253.7l0-29.7 0-32c0-79.5-64.5-144-144-144S48 112.5 48 192l0 144zm464-48l0 48 0 24 0 24 0 80 0 48-48 0L48 512 0 512l0-48 0-80 0-24 0-24L0 192C0 86 86 0 192 0S384 86 384 192l0 32 128 64z" />
    </Icon>
);

export default Piano;