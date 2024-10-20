
import { Icon } from "../../index";

/**
 * A component that renders the `ranking-star` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ranking-star?s=sharp-regular ranking-star}
 * @preview ![ranking-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ranking-star.svg)
 */
const RankingStar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M351.8 62.3l69 11-49.4 49.5L382.3 192 320 160.3 257.7 192l10.9-69.1L219.2 73.3l69-11L320 0l31.8 62.3zM272 304l0 160 96 0 0-160-96 0zm-48-48l48 0 96 0 48 0 0 48 0 160 0 48-48 0-96 0-48 0 0-48 0-160 0-48zM48 368l0 96 96 0 0-96-96 0zM0 320l48 0 96 0 48 0 0 48 0 96 0 48-48 0-96 0L0 512l0-48 0-96 0-48zm592 80l-96 0 0 64 96 0 0-64zm-96-48l96 0 48 0 0 48 0 64 0 48-48 0-96 0-48 0 0-48 0-64 0-48 48 0z" />
    </Icon>
);

export default RankingStar;