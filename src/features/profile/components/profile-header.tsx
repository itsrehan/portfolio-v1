import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
  <div className="flex flex-col items-center justify-center border-x border-t border-edge bg-gradient-to-b from-black/40 via-zinc-900/30 to-transparent py-8 px-4 shadow-sm">
      <img
        className="size-32 sm:size-40 rounded-full ring-2 ring-info ring-offset-2 ring-offset-background mb-4 select-none"
        alt={`${USER.displayName}'s avatar`}
        src={USER.avatar}
        fetchPriority="high"
      />
      <h1 className="flex items-center text-4xl font-bold text-white mb-2">
        {USER.displayName}
        &nbsp;
        <SimpleTooltip content="Verified">
          <VerifiedIcon className="size-[0.8em] translate-y-px text-info select-none" />
        </SimpleTooltip>
        {USER.namePronunciationUrl && (
          <>
            &nbsp;
            <PronounceMyName
              className="translate-y-px"
              namePronunciationUrl={USER.namePronunciationUrl}
            />
          </>
        )}
      </h1>
      <div className="w-full max-w-xl flex justify-center py-2">
        <div className="w-full text-center">
          <FlipSentences sentences={USER.flipSentences} />
        </div>
      </div>
    </div>
  );
}
