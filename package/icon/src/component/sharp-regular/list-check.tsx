
import { Icon } from "../../index";

/**
 * A component that renders the `list-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=sharp-regular list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M150.9 69.4l13.4-14.9L134.5 27.8 121.1 42.6 63.2 107 38.1 81.9 24 67.7-4.3 96 9.9 110.1l40 40L64.8 165l14.1-15.7 72-80zm0 160l13.4-14.9-29.7-26.8-13.4 14.9L63.2 267 38.1 241.9 24 227.7-4.3 256 9.9 270.1l40 40L64.8 325l14.1-15.7 72-80zM192 72l0 48 24 0 272 0 24 0 0-48-24 0L216 72l-24 0zm0 160l0 48 24 0 272 0 24 0 0-48-24 0-272 0-24 0zM160 392l0 48 24 0 304 0 24 0 0-48-24 0-304 0-24 0zM96 416a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ListCheck;