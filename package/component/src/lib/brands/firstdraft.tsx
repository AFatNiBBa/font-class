
import { Icon } from "../../index";

/**
 * A component that renders the `firstdraft` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/firstdraft?s=brands firstdraft}
 * @preview ![firstdraft](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/firstdraft.svg)
 */
const Firstdraft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 192h-64v128H192v128H0v-25.6h166.4v-128h128v-128H384V192zm-25.6 38.4v128h-128v128H64V512h192V384h128V230.4h-25.6zm25.6 192h-89.6V512H320v-64h64v-25.6zM0 0v384h128V256h128V128h128V0H0z" />
    </Icon>
);

export default Firstdraft;