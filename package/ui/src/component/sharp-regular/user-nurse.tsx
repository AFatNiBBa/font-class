
import { Icon } from "../../index";

/**
 * A component that renders the `user-nurse` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse?s=sharp-regular user-nurse}
 * @preview ![user-nurse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-nurse.svg)
 */
const UserNurse: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 128l0-80L224 0 352 48l0 80-.3 0c.2 2.6 .3 5.3 .3 8l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40c0-2.7 .1-5.4 .3-8l-.3 0zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16-160 0 0 16zM208 40l0 24-24 0 0 32 24 0 0 24 32 0 0-24 24 0 0-32-24 0 0-24-32 0zM189 456.9L105.4 368l-6.8 0-32 96 129.1 0-6.7-7.1zM381.4 464l-32-96-6.8 0L259 456.9l-6.7 7.1 129.1 0zM321.9 320l62.1 0 48 144 16 48-50.6 0L50.6 512 0 512l16-48L64 320l62.1 0L191 389l33 35 33-35 64.9-69z" />
    </Icon>
);

export default UserNurse;