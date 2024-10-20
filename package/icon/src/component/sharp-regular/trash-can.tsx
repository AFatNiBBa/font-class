
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can?s=sharp-regular trash-can}
 * @preview ![trash-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-can.svg)
 */
const TrashCan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80 80 32 80 0 80l0 48 32 0 0 336 0 48 48 0 288 0 48 0 0-48 0-336 32 0 0-48-32 0-48 0-13.8 0L308 10.7 300.8 0 288 0 160 0zM296.5 80l-145 0 21.3-32 102.3 0 21.3 32zM80 464l0-336 288 0 0 336L80 464zm80-272l0-16-32 0 0 16 0 208 0 16 32 0 0-16 0-208zm80 0l0-16-32 0 0 16 0 208 0 16 32 0 0-16 0-208zm80 0l0-16-32 0 0 16 0 208 0 16 32 0 0-16 0-208z" />
    </Icon>
);

export default TrashCan;