
import { Icon, generic } from "../../index";

/**
 * A component that renders the `leaf` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=sharp-duotone-solid leaf}
 * @preview ![leaf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05Ni40IDI2MC4xQzEzMC42IDIzNy4zIDE3MS44IDIyNCAyMTYgMjI0YzI0IDAgNDggMCA3MiAwYzggMCAxNiAwIDI0IDBjMCAxNiAwIDMyIDAgNDhjLTggMC0xNiAwLTI0IDBjLTI0IDAtNDggMC03MiAwYy0uMSAwLS4yIDAtLjMgMGMtMS4yIDAtMi41IDAtMy43IDBjLTEuNSAwLTIuOCAuMS00LjIgLjFjLTIuOCAuMS01LjUgLjMtOC4yIC42Yy01LjQgLjUtMTAuNyAxLjMtMTUuOSAyLjNjLTEwLjQgMi0yMC41IDUtMzAuMiA4LjljLTE5LjMgNy43LTM2LjggMTguOS01MS44IDMyLjhDMTIxLjYgMzkyLjMgMTkwLjMgNDQ4IDI3MiA0NDhsMSAwYzEzMi4xLS43IDIzOS0xMzAuOSAyMzktMjkxLjRjMC01MC40LTEwLjUtOTcuOC0yOS4xLTEzOS4xQzQ2OC43IDYzIDQyNi4yIDk2IDM3NiA5NkwyNzIgOTZjLTkzLjIgMC0xNjkuNSA3Mi41LTE3NS42IDE2NC4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE2IDI3MmMtOTIuOCAwLTE2OCA3NS4yLTE2OCAxNjhsMCAxNiAwIDI0TDAgNDgwbDAtMjQgMC0xNkMwIDMyMC43IDk2LjcgMjI0IDIxNiAyMjRsNzIgMCAyNCAwIDAgNDgtMjQgMC03MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96.4 260.1C130.6 237.3 171.8 224 216 224c24 0 48 0 72 0c8 0 16 0 24 0c0 16 0 32 0 48c-8 0-16 0-24 0c-24 0-48 0-72 0c-.1 0-.2 0-.3 0c-1.2 0-2.5 0-3.7 0c-1.5 0-2.8 .1-4.2 .1c-2.8 .1-5.5 .3-8.2 .6c-5.4 .5-10.7 1.3-15.9 2.3c-10.4 2-20.5 5-30.2 8.9c-19.3 7.7-36.8 18.9-51.8 32.8C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-50.4-10.5-97.8-29.1-139.1C468.7 63 426.2 96 376 96L272 96c-93.2 0-169.5 72.5-175.6 164.1z" />
            <path d="M216 272c-92.8 0-168 75.2-168 168l0 16 0 24L0 480l0-24 0-16C0 320.7 96.7 224 216 224l72 0 24 0 0 48-24 0-72 0z" />
    </Icon>
);

export default Leaf;