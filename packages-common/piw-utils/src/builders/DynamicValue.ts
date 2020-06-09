import { DynamicValue, ValueStatus } from "mendix";

export function dynamicValue<T>(value?: T, loading?: boolean): DynamicValue<T> {
    if (loading) {
        return { status: ValueStatus.Loading, value };
    }
    return value ? { status: ValueStatus.Available, value } : { status: ValueStatus.Unavailable, value: undefined };
}
