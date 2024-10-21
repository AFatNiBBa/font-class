
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-hail` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-hail?s=sharp-solid cloud-hail}
 * @preview ![cloud-hail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-hail.svg)
 */
const CloudHail: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 320L0 320l0-96c0-41.8 26.7-77.4 64-90.5L64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80l0 16c53 0 96 43 96 96l0 96-96 0L96 320zm0 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM32 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CloudHail;