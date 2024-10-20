
import { Icon } from "../../index";

/**
 * A component that renders the `npm` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/npm?s=brands npm}
 * @preview ![npm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/npm.svg)
 */
const Npm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
    </Icon>
);

export default Npm;