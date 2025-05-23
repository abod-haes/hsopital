import { ReactNode, useMemo } from "react";
import { View } from "react-native";
import { vars } from "nativewind";

interface StyleProviderProps {
  variables: Record<string, string>;
  children: ReactNode;
}

export const VariableProvider = ({
  variables,
  children,
}: StyleProviderProps) => {
  const generatedVars = useMemo(() => vars(variables), [variables]);

  return (
    <View style={[{ flex: 1, width: "100%", height: "100%" }, generatedVars]}>
      {children}
    </View>
  );
};
