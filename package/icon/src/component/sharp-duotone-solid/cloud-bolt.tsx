
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt?s=sharp-duotone-solid cloud-bolt}
 * @preview ![cloud-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgMzYwbDAgMjQgODggMEwxOTIgNTEyIDM2OCAzNzZsMC0yNC04OCAwIDQwLTEyOEwxNDQgMzYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMzIwTDAgMzIwbDAtOTZjMC00MS44IDI2LjctNzcuNCA2NC05MC41TDY0IDExMkM2NCA1MC4xIDExNC4xIDAgMTc2IDBjNDMuMSAwIDgwLjUgMjQuMyA5OS4yIDYwYzE0LjctMTcuMSAzNi41LTI4IDYwLjgtMjhjNDQuMiAwIDgwIDM1LjggODAgODBsMCAxNmM1MyAwIDk2IDQzIDk2IDk2bDAgOTYtOTYgMC0xNiAwLTc2LjUgMCA0MC0xMjgtNTEgMEwxNDQgMzIwbC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CloudBolt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M144 360l0 24 88 0L192 512 368 376l0-24-88 0 40-128L144 360z" />
            <path d="M96 320L0 320l0-96c0-41.8 26.7-77.4 64-90.5L64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80l0 16c53 0 96 43 96 96l0 96-96 0-16 0-76.5 0 40-128-51 0L144 320l-48 0z" />
    </Icon>
);

export default CloudBolt;