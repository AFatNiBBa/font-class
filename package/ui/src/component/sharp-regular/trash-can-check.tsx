
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-check?s=sharp-regular trash-can-check}
 * @preview ![trash-can-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-can-check.svg)
 */
const TrashCanCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80 80 32 80 0 80l0 48 32 0 0 336 0 48 48 0 288 0 48 0 0-48 0-336 32 0 0-48-32 0-48 0-13.8 0L308 10.7 300.8 0 288 0 160 0zM296.5 80l-145 0 21.3-32 102.3 0 21.3 32zM80 464l0-336 288 0 0 336L80 464zM337 241l17-17L320 190.1l-17 17-111 111-47-47-17-17L94.1 288l17 17 64 64 17 17 17-17L337 241z" />
    </Icon>
);

export default TrashCanCheck;