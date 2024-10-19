
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-dress-simple` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=solid person-dress-simple}
 * @preview ![person-dress-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDcuMTQ5IDE5NC44MTNMMjU1LjM3NSAzNjMuNjA0QzI1OC4yOTUgMzczLjgyNiAyNTAuNjIgMzg0IDIzOS45OSAzODRIMTkyVjQ4MEMxOTIgNDk3LjY3MyAxNzcuNjczIDUxMiAxNjAgNTEySDk2Qzc4LjMyNyA1MTIgNjQgNDk3LjY3MyA2NCA0ODBWMzg0SDE2LjAxQzUuMzggMzg0IC0yLjI5NSAzNzMuODI2IDAuNjI1IDM2My42MDRMNDguODUxIDE5NC44MTNDNTQuNzM5IDE3NC4yMDcgNzMuNTczIDE2MCA5NS4wMDUgMTYwSDE2MC45OTVDMTgyLjQyNyAxNjAgMjAxLjI2MSAxNzQuMjA3IDIwNy4xNDkgMTk0LjgxM1pNMTI4IDEyOEMxNjMuMzc1IDEyOCAxOTIgOTkuMzc1IDE5MiA2NFMxNjMuMzc1IDAgMTI4IDBTNjQgMjguNjI1IDY0IDY0UzkyLjYyNSAxMjggMTI4IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonDressSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M207.149 194.813L255.375 363.604C258.295 373.826 250.62 384 239.99 384H192V480C192 497.673 177.673 512 160 512H96C78.327 512 64 497.673 64 480V384H16.01C5.38 384 -2.295 373.826 0.625 363.604L48.851 194.813C54.739 174.207 73.573 160 95.005 160H160.995C182.427 160 201.261 174.207 207.149 194.813ZM128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128Z" />
        </Icon>
    </>
}