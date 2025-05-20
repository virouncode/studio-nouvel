import InteractiveText from "@/components/InteractiveText";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import "./youtube-gallery.css";

const videos = [
  { id: "bqTG-xwgcH4", client: "WWF", description: "" },
  { id: "tYaH83TmzSc", client: "Sosh", description: "" },
  { id: "87aQ_MX8wIY", client: "Oxford", description: "" },
  { id: "dg89O205WRc", client: "Réfugiés", description: "" },
  { id: "Tf3Xy7eNi8c", client: "Sisley", description: "" },
  { id: "vBmcTYIDTBk", client: "Médecins du Monde", description: "" },
  { id: "X2bcXrzO0h4", client: "Diana Boss", description: "" },
  { id: "VTU5kTCrrAU", client: "Le Principal", description: "" },
  { id: "iTUznWn8sEk", client: "Power Lips", description: "" },
  { id: "dP7M-nMrvwQ", client: "Le Meilleur d'entre nous", description: "" },
  { id: "fPeBZaheKfU", client: "Thuasne", description: "" },
  { id: "uv9aKF_Tm40", client: "DBN Power Mum", description: "" },
  { id: "9zi-uKzVcDc", client: "A girl at the fence", description: "" },
];

export default function YouTubeGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container mx-auto sm:px-6">
      {videos.map(({ id, client, description }) => (
        <Dialog key={id}>
          <DialogTrigger asChild>
            <Card className="gallery-item overflow-hidden group relative p-0 rounded-none border-none shadow-none cursor-pointer hover:scale-[0.98] transition-all duration-800">
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={`Vidéo pour ${client}`}
                    className="object-cover transition-opacity duration-300"
                    fill
                  />
                  <div className="absolute inset-0 bg-white opacity-50 sm:opacity-0 sm:group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <InteractiveText
                      className={`text-6xl font-bold mb-2 cursor-pointer text-center`}
                      text={client}
                    />
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-none w-[95%] dialog-content-horizontal">
            <DialogHeader>
              <DialogTitle>{client}</DialogTitle>
              <DialogDescription>
                {description ?? "Descriptif"}
              </DialogDescription>
            </DialogHeader>
            <div className="w-full max-w-7xl mx-auto h-[200px] sm:h-[400px] md:h-[600px] border rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={
                  `https://www.youtube-nocookie.com/embed/${id}` +
                  "?modestbranding=1&rel=0&enablejsapi=1&autoplay=1"
                }
                title={`Vidéo pour ${client}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
