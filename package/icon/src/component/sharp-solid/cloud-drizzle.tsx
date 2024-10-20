
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-drizzle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-drizzle?s=sharp-solid cloud-drizzle}
 * @preview ![cloud-drizzle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-drizzle.svg)
 */
const CloudDrizzle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 320L0 320l0-96c0-41.8 26.7-77.4 64-90.5L64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80l0 16c53 0 96 43 96 96l0 96-96 0L96 320zm-8 56l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm96 64l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm192-24l0 24 0 48 0 24-48 0 0-24 0-48 0-24 48 0zm-96-40l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm192-24l0 24 0 48 0 24-48 0 0-24 0-48 0-24 48 0z" />
    </Icon>
);

export default CloudDrizzle;