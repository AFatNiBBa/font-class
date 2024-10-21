
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=sharp-regular trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80.1 80 32 80 0 80l0 48 35.6 0L64 512l288 0 28.4-384 35.6 0 0-48-32 0-48.1 0-13.7 0L276 10.7 268.8 0 256 0 160 0zM264.5 80l-113 0 21.3-32 70.3 0 21.3 32zM108.6 464L83.7 128l212.8 0 .9 1.3 1.9-1.3 33 0L307.4 464l-198.8 0zM640 128l-192 0 0 48 192 0 0-48zM608 256l-160 0 0 48 160 0 0-48zM448 384l0 48 96 0 0-48-96 0z" />
    </Icon>
);

export default TrashList;