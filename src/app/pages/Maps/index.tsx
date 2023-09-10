import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import PageHeader from 'app/components/PageHeader';
import Button from 'UI/Button';
import Search from 'app/components/Search';
import {
  FullscreenControl,
  GeoObject,
  Map,
  Panorama,
  Placemark,
  TypeSelector,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps';

export default function Maps() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <PageHeader title="Maps">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Search onSearch={value => setSearch(value)} />
          <Button leftIcon={UserGroupIcon} onClick={() => setIsVisible(true)}>
            {t('Maps')}
          </Button>
        </div>
      </PageHeader>
      <YMaps>
        <div>
          <Map
            defaultState={{ center: [40.120304, 67.82854], zoom: 3 }}
            width="100%"
            height="500px"
          >
            <Placemark geometry={[40.54255, 68.048838]} />
            <ZoomControl options={{ float: 'right' }} />
            <TypeSelector options={{ float: 'right' }} />
            <GeoObject
              geometry={{
                type: 'LineString',
                coordinates: [
                  [40.54255, 68.048838],
                  [40.310781, 67.956096],
                  [40.699033, 68.093763],
                ],
              }}
            />
            <FullscreenControl />
          </Map>
        </div>
      </YMaps>
    </>
  );
}
