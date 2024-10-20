
import { Icon } from "../../index";

/**
 * A component that renders the `trash-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-arrow-up?s=sharp-regular trash-arrow-up}
 * @preview ![trash-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-arrow-up.svg)
 */
const TrashArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80.1 80 32 80 0 80l0 48 35.6 0L64 512l320 0 28.4-384 35.6 0 0-48-32 0-48.1 0-13.7 0L308 10.7 300.8 0 288 0 160 0zM296.5 80l-145 0 21.3-32 102.3 0 21.3 32zM108.6 464L83.7 128l280.6 0L339.4 464l-230.8 0zM238.1 193.9L224 179.7l-14.1 14.1-64 64L131.7 272 160 300.3l14.1-14.1L204 256.3 204 384l0 20 40 0 0-20 0-127.7 29.9 29.9L288 300.3 316.3 272l-14.1-14.1-64-64z" />
    </Icon>
);

export default TrashArrowUp;