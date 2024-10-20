
import { Icon } from "../../index";

/**
 * A component that renders the `list-ol` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ol?s=sharp-thin list-ol}
 * @preview ![list-ol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/list-ol.svg)
 */
const ListOl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40 40l0 16 8 0 24 0 0 152-40 0-8 0 0 16 8 0 96 0 8 0 0-16-8 0-40 0L88 48l0-8-8 0L48 40l-8 0zM200 88l0 16 8 0 288 0 8 0 0-16-8 0L208 88l-8 0zm0 160l0 16 8 0 288 0 8 0 0-16-8 0-288 0-8 0zm0 160l0 16 8 0 288 0 8 0 0-16-8 0-288 0-8 0zM80 288c-30.9 0-56 25.1-56 56l16 0c0-22.1 17.9-40 40-40l2.1 0c20.9 0 37.9 17 37.9 37.9c0 9.6-3.6 18.8-10.2 25.9L18.2 466 16 468.3l0 3.2 0 .6 0 8 8 0 112 0 8 0 0-16-8 0-94.1 0 79.6-85.3c9.3-10 14.5-23.1 14.5-36.8c0-29.8-24.1-53.9-53.9-53.9L80 288z" />
    </Icon>
);

export default ListOl;