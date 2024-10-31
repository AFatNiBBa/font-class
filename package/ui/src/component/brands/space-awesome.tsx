
import { Icon } from "../../index";

/**
 * A component that renders the `space-awesome` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/space-awesome?s=brands space-awesome}
 * @preview ![space-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/space-awesome.svg)
 */
const SpaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z" />
    </Icon>
);

export default SpaceAwesome;