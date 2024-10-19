
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=sharp-duotone-solid ribbon}
 * @preview ![ribbon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwxMTIgNjRMMjI2LjkgMzg2LjljLTI3LjgtMzEuOS01NS42LTYzLjctODMuMy05NS42TDAgNDQ4ek05NiA2NGMxNi45IDE4LjQgMzMuNyAzNi44IDUwLjYgNTUuMkwyMjQgOTZsNzcuNCAyMy4yTDM1MiA2NCAzMDQgMCAxNDQgMCA5NiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDY0TDQ0OCA0NDggMzM2IDUxMiA2NCAyMDBsMC04OEw5NiA2NHpNMzI4LjQgMjcwLjJMMjQ1LjcgMTgwIDM1MiA2NGwzMiA1NiAwIDg4LTU1LjYgNjIuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Ribbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 448l112 64L226.9 386.9c-27.8-31.9-55.6-63.7-83.3-95.6L0 448zM96 64c16.9 18.4 33.7 36.8 50.6 55.2L224 96l77.4 23.2L352 64 304 0 144 0 96 64z" />
            <path d="M96 64L448 448 336 512 64 200l0-88L96 64zM328.4 270.2L245.7 180 352 64l32 56 0 88-55.6 62.2z" />
    </Icon>
);

export default Ribbon;