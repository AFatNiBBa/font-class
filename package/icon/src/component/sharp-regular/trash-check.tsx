
import { Icon } from "../../index";

/**
 * A component that renders the `trash-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-check?s=sharp-regular trash-check}
 * @preview ![trash-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-check.svg)
 */
const TrashCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80.1 80 32 80 0 80l0 48 35.6 0L64 512l320 0 28.4-384 35.6 0 0-48-32 0-48.1 0-13.7 0L308 10.7 300.8 0 288 0 160 0zM296.5 80l-145 0 21.3-32 102.3 0 21.3 32zM108.6 464L83.7 128l280.6 0L339.4 464l-230.8 0zM318.1 246.1L332.3 232 304 203.7l-14.1 14.1L200 307.7l-25.9-25.9L160 267.7 131.7 296l14.1 14.1 40 40L200 364.3l14.1-14.1 104-104z" />
    </Icon>
);

export default TrashCheck;