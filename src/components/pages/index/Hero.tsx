import { FunctionComponent } from "react";

export const Hero: FunctionComponent = () => {
  return (
    <div className="relative pb-4 sm:pb-8">
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Decentralization is a</span>
            <span className="block text-indigo-600">public good</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            This page tracks staking entities who have committed to cap their
            scope of control to under 22% of the Ethereum network's validators.
          </p>
        </div>
      </div>
    </div>
  );
};