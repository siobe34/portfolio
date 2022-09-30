import { IList } from "../types/IList";

export const ListItem = ({ className, children }: IList) => <li className={`flex align-center ${className}`}>{children}</li>;

export const List = ({ className, children }: IList) => {
    return <ul className={`${className} list-none`}>{children}</ul>;
};
