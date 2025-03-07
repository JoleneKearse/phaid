import React, { createContext, useContext } from "react";

const TypesContext = createContext<string[]>([]);

export const useTypes = () => useContext(TypesContext);

type TypesProviderProps = {
	children: React.ReactNode;
	types: string[];
};

export const TypesProvider = ({ children, types }: TypesProviderProps) => {
	return (
		<TypesContext.Provider value={types}>{children}</TypesContext.Provider>
	);
};
